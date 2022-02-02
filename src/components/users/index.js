/* eslint-disable react/prop-types */
import React, { useState } from 'react'

// styles
import styles from './users.module.css';

// components
import Avatar from '../avatar';

// Assets
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg'
import loader from '../../assets/icons/loader.gif'

const Users = ({users, deleting, deleteUser}) => {
    const [activeUser, setActiveUser] = useState('')
    const removeUser = (username) => {
        setActiveUser(username)
        deleteUser(username)
    }

    return (
        <div className={styles.container}>
            {users ? <p className={styles.table_title}>Users</p> : <p>No user found</p>}
            <table style={{ width:'100%' }}>
                <tbody>
                    {users && (
                        users.map((user) => (
                            <div className={styles.tr} key={user.username}>
                                <tr styles={{width:'100%', background: 'red'}}>
                                    <td className={styles.td} style={{ width:'10%' }}>
                                        <Avatar { ...{firstName:user.firstName, lastName: user.lastName }} />
                                    </td>
                                    <td className={styles.td} style={{ width:'25%' }}>{user.username}</td>
                                    <td className={styles.td} style={{ width:'50%' }}>{`${user.firstName} ${user.lastName}`}</td>
                                    <td className={styles.td} style={{ width:'25%' }}>{user.dob}</td>
                                    <td className={styles.td, styles.td_right} style={{ width:'10%' }}>
                                        {!deleting && activeUser !== user.username ? 
                                            <DeleteIcon onClick={() => removeUser(user.username)}/> 
                                            : <img className={styles.img} src={loader}></img>
                                        }
                                    </td>
                                </tr>
                            </div>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );


}

export default Users;
