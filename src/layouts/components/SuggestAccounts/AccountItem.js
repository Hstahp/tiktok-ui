// eslint-disable-next-line
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrap } from '~/components/Popper';
import styles from './SuggestAccounts.module.scss';
import Image from '~/components/Image';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrap>
                    <AccountPreview />
                </PopperWrap>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} placement="bottom" offset={[-20, 8]} render={renderPreview}>
                <div className={cx('account-item')}>
                    <Image
                        className={cx('avatar')}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyBJdd3XvR3LDCy5XyEb5iZJP5fLC3h6PTkzyVpRzQtwrYCIzr_a856iY&s=10"
                        alt="avatar"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>Hinagiku</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}> Kayou Hinagiku</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}
// eslint-disable-next-line
AccountItem.propTypes = {};

export default AccountItem;
