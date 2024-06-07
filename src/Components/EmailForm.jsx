import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNotification } from './NotificationContext';
import 'react-quill/dist/quill.snow.css'; // Add css for quill
import ReactQuill from 'react-quill';
import { FaFileCsv, FaPaperclip } from "react-icons/fa";
import { TbSquareRoundedXFilled } from "react-icons/tb";
import { FaFile } from "react-icons/fa";
import Header from './Header';
import Footer from './Footer';

const EmailForm = () => {
    const notify = useNotification();
    const [from, setFrom] = useState('');
    const [emails, setEmails] = useState('');
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');
    const [csvFile, setCsvFile] = useState(null);
    const [attachments, setAttachments] = useState([]);
    const [fileInputKey, setFileInputKey] = useState(Date.now());
    const [loading, setLoading] = useState(false);

    const csvFileInputRef = useRef(null);
    const attachmentsInputRef = useRef(null);

    const handleCsvFileChange = (event) => {
        setCsvFile(event.target.files[0]);
    };

    const handleAttachmentChange = (event) => {
        setAttachments([...attachments, ...event.target.files]);
    };

    const handleCsvFileRemove = () => {
        setCsvFile(null);
        setFileInputKey(Date.now()); // reset the file input field
    };

    const handleAttachmentRemove = (index) => {
        setAttachments(attachments.filter((_, i) => i !== index));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true); // Set loading to true when email is being sent
        const formData = new FormData();
        formData.append('from', from);
        formData.append('subject', subject);
        formData.append('text', text);

        if (csvFile) {
            formData.append('file', csvFile);
        } else {
            formData.append('emails', emails);
        }

        attachments.forEach((file) => {
            formData.append('attachments', file);
        });

        try {
            const response = await axios.post('https://bulk-email-tool-backend-moat.onrender.com/send-emails', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            notify(response.data.message);
            // Reset form state
            setFrom('');
            setEmails('');
            setSubject('');
            setText('');
            setCsvFile(null);
            setAttachments([]);
            setFileInputKey(Date.now());
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Error Sending Email';
            notify(errorMessage, 'error');
        } finally {
            setLoading(false); // Set loading to false after email is sent or if an error occurs
        }
    };

    return (
        <div>
            <Header />
            <h3 className="font-weight-bold text-center mt-5">Start Sending Your Emails!!!</h3>
            <div className="container mt-5">
                <div className="card">
                    <div className="card-header">
                        <h3>New Message</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>To</label>
                                <textarea
                                    className="form-control"
                                    value={emails}
                                    onChange={(e) => setEmails(e.target.value)}
                                    rows="1"
                                    disabled={csvFile !== null}
                                    required={csvFile === null}
                                />
                            </div>
                            <div className="form-group">
                                <label>Upload CSV File</label>
                                <div>
                                    <FaPaperclip
                                        size={20}
                                        onClick={() => csvFileInputRef.current.click()}
                                        style={{ cursor: 'pointer' }}
                                    />
                                    <input
                                        key={fileInputKey} // reset the input field
                                        type="file"
                                        className="form-control-file d-none"
                                        onChange={handleCsvFileChange}
                                        ref={csvFileInputRef}
                                        disabled={csvFile !== null}
                                    />
                                    {csvFile && (
                                        <div className="mt-2">
                                            <FaFileCsv size={20} />
                                            {csvFile.name}
                                            <TbSquareRoundedXFilled
                                                onClick={handleCsvFileRemove}
                                                style={{ cursor: 'pointer', marginLeft: '10px' }}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <hr></hr>
                            <div className="form-group">
                                <label>Subject</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required
                                />
                            </div>
                            <hr></hr>
                            <div className="form-group">
                                <label>Message</label>
                                <ReactQuill
                                    value={text}
                                    onChange={setText}
                                    className="form-control"
                                    theme="snow"
                                    required
                                />
                                <label className="mt-3">Upload Attachments</label>
                                <div>
                                    <FaPaperclip
                                        size={20}
                                        onClick={() => attachmentsInputRef.current.click()}
                                        style={{ cursor: 'pointer', marginRight: '10px' }}
                                    />
                                    <input
                                        type="file"
                                        className="form-control-file d-none"
                                        onChange={handleAttachmentChange}
                                        multiple
                                        ref={attachmentsInputRef}
                                    />
                                    {attachments.length > 0 && (
                                        <div className="mt-2">
                                            {attachments.map((file, index) => (
                                                <div key={index}>
                                                    <FaFile size={20} />
                                                    {file.name}
                                                    <TbSquareRoundedXFilled
                                                        onClick={() => handleAttachmentRemove(index)}
                                                        style={{ cursor: 'pointer', marginLeft: '10px' }}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <hr></hr>
                            <button type="submit" className="btn btn-primary rounded-pill" disabled={loading} style={{ position: 'relative' }}>
                                {loading ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        <span className="sr-only"></span>
                                    </>
                                ) : (
                                    'Send'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default EmailForm;
