import styles from './menu.module.scss';
import classNames from 'classnames';

export interface MenuProps {
    className?: string;
}

const Dashboard = [
    'Make Appointment',
    'View Appointments',
    'Cancel Appointments',
    'Reschedule Appointment',
    'View Doctors',
    'Medical History',
    'Edit Profile'
];


export const Menu = ({ className }: MenuProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.logo}>
                <img
                    src="https://images.vexels.com/media/users/3/153835/isolated/preview/172ddc045ae1707a415adeae0543a5f0-patient-colored-stroke-icon.png"
                    className={styles.logoImg}
                />
                <span className={styles.logoText}>Patient</span>
            </div>
            <span className={styles.Menu}>
                <h4 className='h4' onClick={() => {window.location.href="/"}}>Dashboard</h4>
                <hr className={styles.hr} />
                <ul className={styles.list}>
                <li className={styles.listItem} onClick={() => {window.location.href="/appointments"}} >Make Appointment</li>
                    
                </ul>
            </span>
        </div>
    );
};
