export const SignupInFooter = () => {
    return (
        <footer className='flex'>
            <h3>Questions? Contact us.</h3>
            <section className='flex gap20'>
                <div className="flex column">
                    <a href="#">FAQ</a>
                    <a href="#">Cookie Preferences</a>
                </div>
                <div className="flex column">
                    <a href="#">Help Centre</a>
                    <a href="#">Corporate Information</a>
                </div>
                <div className="flex column">
                    <a href="#">Terms of Use</a>
                </div>
                <div>
                    <a href='#'>Privacy</a>
                </div>
            </section>
        </footer>
    )
}