import React, { useEffect, useState } from "react";
import { Row, Col, Tab } from "react-bootstrap";
import { useAppContext } from "../AppContext";

function Settings() {
    const [selected, setSelected] = useState('#general');
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPhone, setNewPhone] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const [updateError, setUpdateError] = useState('');

    const { user, supabase, loading } = useAppContext();

    useEffect(() => {
        if (!user && !loading) {
            window.location.href = "/";
        }
    }, [user, loading]);

    const updateUser = async () => {
        try {
            console.log('Updating user data:', {email: newEmail});
            const { error } = await supabase
            .from('auth.users')
            .update({
                email: newEmail
            })
            .eq('id', user.id);

            if (error) {
                setUpdateError(error.message);
                return;
            }

            setUpdateSuccess(true);
        } catch (error) {
            console.error('Error updating user credentials:', error.message);
            setUpdateError('An error occurred while updating user credentials.');
        }
    };

    return (
        <>
            <div className="bg-beige" style={{ height: "400px" }}>
                <hr />
                <Tab.Container defaultActiveKey='#general'>
                    <Row className="w-75 mx-auto overflow-y-auto">
                        <Col md={3} className="pt-0">
                            <h4 className="font-weight-bold pb-4">
                                Account Settings
                            </h4>
                            <div className="bg-beige">
                                <div id="general" className={`rounded ${selected === "#general" ? "bg-green text-white" : "text-brown"} hover:bg-brown hover:text-white p-2 w-64 mb-2`} onClick={() => setSelected('#general')}>
                                    <a href="#general" className="hidden">General</a>
                                    General
                                </div>
                                <div id="change-password" className={`rounded ${selected === "#change-password" ? "bg-green text-white" : "text-brown"} hover:bg-brown hover:text-white p-2 w-64 mb-2`} onClick={() => setSelected('#change-password')}>
                                    <a href="#change-password" className="hidden">Change password</a>
                                    Change Password
                                </div>
                            </div>
                        </Col>
                        <Col md={9}>
                            <div className="pt-9">
                                <div id="general" className={` ${selected === "#general" ? "" : "hidden"}`}>
                                    <hr className="border-light m-0" />
                                    <div>
                                        <div className="form-group">
                                            <label className="block">Name</label>
                                            <input 
                                                type="text" 
                                                name="newName"
                                                placeHolder=""
                                                className="form-control" 
                                                value={newName}
                                                onChange={(e) => setNewName(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="block">E-mail</label>
                                            <input 
                                                type="text" 
                                                name="newEmail"
                                                placeHolder=""
                                                className="form-control" 
                                                value={newEmail}
                                                onChange={(e) => setNewEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="block">Phone</label>
                                            <input 
                                                type="text" 
                                                name="newPhone"
                                                placeHolder=""
                                                className="form-control" 
                                                value={newPhone}
                                                onChange={(e) => setNewPhone(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div id="change-password" className={` ${selected === "#change-password" ? "" : "hidden"}`}>
                                    <hr className="border-light m-0" />
                                    <div>
                                        <div className="form-group">
                                            <label className="block">New Password</label>
                                            <input
                                                type="text"
                                                name="newPassword"
                                                placeholder=""
                                                className="form-control"
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="block">Confirm Password</label>
                                            <input
                                                type="text"
                                                name="confirmPassword"
                                                placeholder=""
                                                className="form-control"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
            <div className="text-center p-3 bg-beige">
                <button className="bg-green hover:bg-brown text-white px-4 py-2 rounded-full" onClick={updateUser}>Save Changes</button>
                {updateSuccess && <p className="text-base text-center text-green-500">User credentials updated successfully.</p>}
                {updateError && <p className="text-base text-center text-red-500">{updateError}</p>}
            </div>
        </>
    );
}

export default Settings;
