import styles from './container.module.scss';
import classNames from 'classnames';

export interface ContainerProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-containers-and-templates
 */
export const Container = ({ className }: ContainerProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.display}>
                <div className={styles.Cancel}>
                    <h5 className={styles.active}>
                        Active Appointments
                        <label className={styles.Activel_lbl}>5</label>
                    </h5>
                </div>
                <div className={styles.Cancel}>
                    <h5 className={styles.active}>
                        Cancelled Appointments
                        <label className={styles.Cancelled_lbl}>0</label>
                    </h5>
                </div>
                <div className={styles.Cancel}>
                    <h5 className={styles.active}>
                        Rescheduled Appointments
                        <label className={styles.Reschedule_lbl}>0</label>
                    </h5>
                </div>
            </div>
            <h1 className={styles.h1}>My Appointment History</h1>

            <table className={styles.h1}>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Doctor's Name</th>
                        <th>Specialization</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>April 1, 2023</td>
                        <td>9:00 AM</td>
                        <td>Dr. John Smith</td>
                        <td>Cardiology</td>
                    </tr>
                    <tr>
                        <td>April 3, 2023</td>
                        <td>10:30 AM</td>
                        <td>Dr. Sarah Lee</td>
                        <td>Neurology</td>
                    </tr>
                    <tr>
                        <td>April 5, 2023</td>
                        <td>2:00 PM</td>
                        <td>Dr. Michael Chen</td>
                        <td>Dermatology</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
