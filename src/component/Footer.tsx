export const Footer =()=>{
    return (
        <footer
            style={{
            position: 'fixed', // Fixe le footer en bas de la page
            bottom: 0,
            left: 0,
            width: '100%',
            backgroundColor: '#1e2b48', // Couleur de fond
            color: '#f9f9f9', // Couleur du texte
            textAlign: 'center', // Texte centré
            padding: '1rem',
            lineHeight: 0,
            zIndex: 1000,
        }}>
        <p>© 2025 Enerdis. Tous droits réservés.</p>
        </footer>
    );
}