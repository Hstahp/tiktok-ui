import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyBJdd3XvR3LDCy5XyEb5iZJP5fLC3h6PTkzyVpRzQtwrYCIzr_a856iY&s=10"
                alt=""
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>Hinagiku</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}> Kayou Hinagiku</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
