import styles from './make-apppointments.module.scss';
import classNames from 'classnames';

export interface MakeApppointmentsProps {
    className?: string;
}


export const MakeApppointments = ({ className }: MakeApppointmentsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button type="submit">
                    <i className="fa fa-search"></i>
                </button>
            </div>
            <table className={styles.tblDoc}>
                <thead>
                    <tr>
                        <th>Doctor ID</th>
                        <th>Doctor Name</th>
                        <th>Specialization</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1234</td>
                        <td>Dr. John Smith</td>
                        <td>Cardiology</td>
                        <td>12/12/2023</td>
                        <td>16.00</td>
                    </tr>
                    <tr>
                        <td>5678</td>
                        <td>Dr. Jane Doe</td>
                        <td>Neurology</td>
                        <td>12/12/2023</td>
                        <td>16.00</td>
                    </tr>
                    <tr>
                        <td>9012</td>
                        <td>Dr. David Lee</td>
                        <td>Orthopedics</td>
                        <td>12/12/2023</td>
                        <td>16.00</td>
                    </tr>
                </tbody>
            </table>
            <div className={styles.div2}>
                <div className={styles.formA}>
                    <h1 className={styles.h1}>Book an apointment</h1>
                    <form className={styles.appointment}>
                        <div className={styles.div1}>
                            <label className={styles.form}>
                                Title:
                                <select>
                                    <option>Mr</option>
                                    <option>Mrs</option>
                                    <option>Ms</option>
                                    <option>Miss</option>
                                    <option>Dr</option>
                                    <option>Prof</option>
                                    <option>Rev</option>
                                </select>
                                <br />
                            </label>
                            <label className={styles.form}>
                                <input type="text" placeholder="First Name" />
                                <br />
                            </label>
                            <label className={styles.form}>
                                <input type="text" placeholder="Last Name" />
                                <br />
                            </label>
                        </div>
                        <div className={styles.div1}>
                            <label className={styles.form}>
                                <input type="text" placeholder="NIC" />
                                <br />
                            </label>
                            <label className={styles.form}>
                                <input type="text" placeholder="Email" />
                                <br />
                            </label>
                            <label className={styles.form}>
                                <input type="text" placeholder="Contact Number" />
                                <br />
                            </label>
                        </div>
                    </form>
                    <br />
                    <button className="button">Confirm Booking</button>
                </div>
                <div className={styles.div3}>
                    <h6 className={styles.h6}>Doctor Details</h6>
                    <label>Doctors Name:</label>
                    <input placeholder="Doctors Name" />
                    <br />
                    <label>Specialization:</label>
                    <input placeholder="Specialization" />
                    <br />
                  
                </div>
                <div className={styles.div3}>
                    <h6 className={styles.h6}>Appointment Details</h6>
                    <label>Date</label>
                    <input placeholder="Date" />
                    <br />
                    <label>Time:</label>
                    <input placeholder="Time" />
                </div>
            </div>
        </div>
    );
};
