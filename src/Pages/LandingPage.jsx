import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from "../Routes/pathes";
import './LandingPage.css';

function AuthModalContent({ role, onClose, hideSignUp = false }) {
    const [activeTab, setActiveTab] = useState('sign-in');
    const isPharmacy = role === 'pharmacy';
    const isAdmin = role === 'admin';
    const shouldShowSignUp = !hideSignUp;

    return (
        <div className="landing-page__modal-overlay" onClick={onClose}>
            <div className="landing-page__modal" onClick={(event) => event.stopPropagation()}>
                <button
                    type="button"
                    className="landing-page__modal-close"
                    aria-label="Close authentication modal"
                    onClick={onClose}
                >
                    ×
                </button>

                <div className="landing-page__modal-icon">{isPharmacy ? '🏬' : isAdmin ? '🛡️' : '💊'}</div>
                <h2 className="landing-page__modal-title">{isAdmin ? 'Admin access' : isPharmacy ? 'Pharmacy access' : 'Welcome back'}</h2>
                <p className="landing-page__modal-subtitle">
                    {isAdmin
                        ? 'Sign in to access the admin console'
                        : isPharmacy
                            ? 'Sign in to manage your pharmacy dashboard'
                            : 'Sign in to your PharmaCare account'}
                </p>

                {shouldShowSignUp ? (
                    <div className="landing-page__auth-tabs">
                        <button
                            type="button"
                            className={`landing-page__auth-tab ${activeTab === 'sign-in' ? 'landing-page__auth-tab--active' : ''}`}
                            onClick={() => setActiveTab('sign-in')}
                        >
                            Sign In
                        </button>
                        <button
                            type="button"
                            className={`landing-page__auth-tab ${activeTab === 'sign-up' ? 'landing-page__auth-tab--active' : ''}`}
                            onClick={() => setActiveTab('sign-up')}
                        >
                            Sign Up
                        </button>
                    </div>
                ) : (
                    <div className="landing-page__auth-tabs">
                        <button
                            type="button"
                            className="landing-page__auth-tab landing-page__auth-tab--active"
                        >
                            Sign In
                        </button>
                    </div>
                )}

                {activeTab === 'sign-in' ? (
                    <div className="landing-page__auth-panel">
                        <div className="landing-page__field">
                            <span className="landing-page__field-icon">📧</span>
                            <input
                                type="email"
                                placeholder="your.email@example.com"
                                aria-label="Email"
                                className="landing-page__input"
                            />
                        </div>

                        <div className="landing-page__field">
                            <span className="landing-page__field-icon">🔒</span>
                            <input
                                type="password"
                                placeholder="Password"
                                aria-label="Password"
                                className="landing-page__input"
                            />
                        </div>

                        <button type="button" className="landing-page__action-button">
                            {isAdmin ? 'Sign In to Admin Panel' : isPharmacy ? 'Sign In to Dashboard' : 'Sign In'}
                        </button>
                    </div>
                ) : (
                    <div className="landing-page__auth-panel">
                        <div className="landing-page__field">
                            <span className="landing-page__field-icon">👤</span>
                            <input
                                type="text"
                                placeholder={isPharmacy ? 'Pharmacy Manager Name' : 'Sara Ahmed'}
                                aria-label="Full Name"
                                className="landing-page__input"
                            />
                        </div>

                        <div className="landing-page__field">
                            <span className="landing-page__field-icon">#</span>
                            <input
                                type="text"
                                placeholder={isPharmacy ? 'Pharmacy Registration Number' : '29801234567890'}
                                aria-label="National ID"
                                className="landing-page__input"
                            />
                        </div>

                        <div className="landing-page__field">
                            <span className="landing-page__field-icon">📞</span>
                            <input
                                type="tel"
                                placeholder="010 xxxx xxxx"
                                aria-label="Phone Number"
                                className="landing-page__input"
                            />
                        </div>

                        <div className="landing-page__field">
                            <span className="landing-page__field-icon">📅</span>
                            <input
                                type="date"
                                placeholder="Date of Birth"
                                aria-label="Date of Birth"
                                className="landing-page__input"
                            />
                        </div>

                        <div className="landing-page__field">
                            <span className="landing-page__field-icon">📍</span>
                            <input
                                type="text"
                                placeholder={isPharmacy ? 'Pharmacy Address' : '12 El-Nasr St, Cairo'}
                                aria-label="Address"
                                className="landing-page__input"
                            />
                        </div>

                        <div className="landing-page__field">
                            <span className="landing-page__field-icon">🔒</span>
                            <input
                                type="password"
                                placeholder="Password"
                                aria-label="Password"
                                className="landing-page__input"
                            />
                        </div>

                        <button type="button" className="landing-page__action-button">
                            {isPharmacy ? 'Create Pharmacy Account' : 'Create Account'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

const PORTALS = [
    {
        title: 'User Portal',
        description: 'Search medicines, compare pharmacies, reserve & track pickups',
        icon: '👤',
        to:PATHS.USER_LOGIN,
    },
    {
        title: 'Pharmacy Dashboard',
        description: 'Manage inventory, fulfill reservations, view analytics',
        icon: '🏬',
        to:PATHS.PHARMACY_LOGIN,
    },
    {
        title: 'Admin Panel',
        description: 'Oversee users, pharmacies, medicines and all reservations',
        icon: '🛡️',
        to:PATHS.ADMIN_LOGIN,
    },
    ];

    const STATS = [
    { label: 'Pharmacies', value: '3' },
    { label: 'Medicines', value: '18+' },
    { label: 'Users', value: '1,847' },
    { label: 'Daily Reservations', value: '247' },
    ];

    export default function LandingPage() {
    const [isUserModalOpen, setIsUserModalOpen] = useState(false);
    const [modalRole, setModalRole] = useState('user');

    const openUserModal = (role = 'user') => {
        setModalRole(role);
        setIsUserModalOpen(true);
    };

    const closeUserModal = () => setIsUserModalOpen(false);

    return (
        <div className="landing-page">
        <header className="landing-page__header">
            <div className="landing-page__brand">
            <span className="landing-page__logo">💊</span>
            <span className="landing-page__brand-name">PharmaCare</span>
            </div>
        </header>

        <main className="landing-page__hero">
            <span className="landing-page__pill">Multi-Pharmacy Inventory & Reservation Platform</span>
            <h1 className="landing-page__heading">
            Find, Compare & <span className="landing-page__heading-accent">Reserve Medicines</span>
            </h1>
            <p className="landing-page__subtext">
            A unified platform connecting patients with pharmacies — search availability, compare
            prices, reserve instantly.
            </p>

            <div className="landing-page__portals">
            {PORTALS.map((portal) => {
                if (portal.title === 'User Portal' || portal.title === 'Pharmacy Dashboard' || portal.title === 'Admin Panel') {
                const isPharmacy = portal.title === 'Pharmacy Dashboard';
                const isAdmin = portal.title === 'Admin Panel';
                return (
                    <button
                    key={portal.title}
                    type="button"
                    onClick={() => openUserModal(isAdmin ? 'admin' : isPharmacy ? 'pharmacy' : 'user')}
                    className="landing-page__portal-card landing-page__portal-button"
                    >
                    <span className="landing-page__portal-icon">{portal.icon}</span>
                    <span className="landing-page__portal-title">
                        {portal.title} <span className="landing-page__portal-arrow">›</span>
                    </span>
                    <span className="landing-page__portal-description">{portal.description}</span>
                    </button>
                );
                }

                return (
                <Link key={portal.title} to={portal.to} className="landing-page__portal-card">
                    <span className="landing-page__portal-icon">{portal.icon}</span>
                    <span className="landing-page__portal-title">
                    {portal.title} <span className="landing-page__portal-arrow">›</span>
                    </span>
                    <span className="landing-page__portal-description">{portal.description}</span>
                </Link>
                );
            })}
            </div>
            

           

            {isUserModalOpen && (
                <AuthModalContent
                    role={modalRole}
                    onClose={closeUserModal}
                    hideSignUp={modalRole === 'admin'}
                />
            )}
        </main>

        <footer className="landing-page__footer">© 2026 PharmaCare Platform · All rights reserved</footer>
        </div>
    );
    }