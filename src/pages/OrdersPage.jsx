import React,{useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import AddModalVIew from '../components/AddModalVIew';
import Menu from '../components/Menu';
import ModalOrder from '../components/ModalOrder';
import OrdersTable from '../components/OrdersTable';
const OrdersPage = ({isAuthorizetion}) => {

    const [modalActive,setModalActive] = useState(false);
    const tf =(e) => {
        e.preventDefault();
    }
    return (
        <div className='outer-wrapper main'>
            <Menu isAuthorizetion={isAuthorizetion} tf={tf} indexActive={1}/>
            <div className='storage'>
                <h2 className="storage-title">Orders</h2>
                <div className="storage-mod">
                    <button
                        className='storage-btn filter_btn'>
                        <svg className='storage-mod_icon' width="35" height="31" viewBox="0 0 35 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.9961 20.3438C12.9961 19.8087 13.4705 19.375 14.0557 19.375H20.4131C20.9983 19.375 21.4727 19.8087 21.4727 20.3438C21.4727 20.8788 20.9983 21.3125 20.4131 21.3125H14.0557C13.4705 21.3125 12.9961 20.8788 12.9961 20.3438Z" fill="black"/>
                            <path d="M8.75781 14.5312C8.75781 13.9962 9.2322 13.5625 9.81738 13.5625H24.6514C25.2366 13.5625 25.7109 13.9962 25.7109 14.5312C25.7109 15.0663 25.2366 15.5 24.6514 15.5H9.81738C9.2322 15.5 8.75781 15.0663 8.75781 14.5312Z" fill="black"/>
                            <path d="M4.51953 8.71875C4.51953 8.18372 4.99392 7.75 5.5791 7.75H28.8896C29.4748 7.75 29.9492 8.18372 29.9492 8.71875C29.9492 9.25378 29.4748 9.6875 28.8896 9.6875H5.5791C4.99392 9.6875 4.51953 9.25378 4.51953 8.71875Z" fill="black"/>
                        </svg>
                        <span className='storage-btn_title'>Filter</span>
                    </button>
                    <button
                        className='storage-btn delete_btn'>
                        <svg className='storage-mod_icon' width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.505588 1.23397C0.941099 0.810897 1.6472 0.810897 2.08271 1.23397L7.98533 6.96793L13.8879 1.23397C14.3234 0.810897 15.0296 0.810897 15.4651 1.23397C15.9006 1.65703 15.9006 2.34296 15.4651 2.76603L9.56245 8.5L15.4651 14.234C15.9006 14.657 15.9006 15.343 15.4651 15.766C15.0296 16.1891 14.3234 16.1891 13.8879 15.766L7.98533 10.0321L2.08271 15.766C1.6472 16.1891 0.941099 16.1891 0.505588 15.766C0.0700773 15.343 0.0700773 14.657 0.505588 14.234L6.4082 8.5L0.505588 2.76603C0.0700773 2.34296 0.0700773 1.65703 0.505588 1.23397Z" fill="black"/>
                        </svg>
                        <span className='storage-btn_title'>Delete</span>
                    </button>
                    <button
                        className='storage-btn add_btn'
                    >
                        <span className='storage-btn_title'>Report</span>
                    </button>
                </div>
                <OrdersTable active={modalActive} setActive={setModalActive}/>
            </div>
        </div>
    )
}

export default OrdersPage