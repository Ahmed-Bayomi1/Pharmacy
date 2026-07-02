    import { Link } from 'react-router-dom';
    import { PATHS } from "../Routes/pathes";
    import './LandingPage.css';

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
            {PORTALS.map((portal) => (
                <Link key={portal.title} to={portal.to} className="landing-page__portal-card">
                <span className="landing-page__portal-icon">{portal.icon}</span>
                <span className="landing-page__portal-title">
                    {portal.title} <span className="landing-page__portal-arrow">›</span>
                </span>
                <span className="landing-page__portal-description">{portal.description}</span>
                </Link>
            ))}
            </div>

            <div className="landing-page__stats">
            {STATS.map((stat) => (
                <div key={stat.label} className="landing-page__stat">
                <span className="landing-page__stat-value">{stat.value}</span>
                <span className="landing-page__stat-label">{stat.label}</span>
                </div>
            ))}
            </div>
        </main>

        <footer className="landing-page__footer">© 2026 PharmaCare Platform · All rights reserved</footer>
        </div>
    );
    }