import React from "react";

function Admin({ display }) {
    return (
        <>
            <h1>ADMIN</h1>
            <table>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>NUMBER</th>
                        <th>PASSWORD</th>
                    </tr>
                </thead>
                <tbody>
                    {display && display.map((data, index) => 
                        <tr key={index}>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.number}</td>
                            <td>{data.password}</td>
                        </tr>
                )}
                </tbody>
            </table>
        </>
    );
}

export default Admin;
