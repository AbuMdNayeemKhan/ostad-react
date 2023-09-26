const bangladesh = ["Dhaka", "Barishal", "Sylet", "Khulna", "Chottogram", "Rajsahi", "Rongpur"];
const ContactForm = () => {
    return (
        <div>
            <ol>
                {
                    bangladesh.map((items, index)=>{
                        return <li key={index.toString()}>{items}</li>
                    })
                }
            </ol>
        </div>
    );
};

export default ContactForm;