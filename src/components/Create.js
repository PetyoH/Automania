import { Link } from "react-router-dom";
import stylesCreate from "./Create.module.css"

const Create = () => {
    return (
        <div className={stylesCreate.wrapper}>
            <form className={stylesCreate.form}>
                <Link to="/" className="close"><i className="fa-solid fa-house"></i></Link>
                <h2 className={stylesCreate.title} >Create</h2>
                <label htmlFor="username"  className={stylesCreate.labelUsername}>Username:</label>
                <input type="text" id="username" name="username" className={`${stylesCreate.username} ${stylesCreate.input}`} />

                <label htmlFor="email" className={stylesCreate.labelEmail}>Email:</label>
                <input type="email" id="email" name="email" className={`${stylesCreate.email} ${stylesCreate.input}`} />

                <label htmlFor="prize" className={stylesCreate.labelPrize}>Prize:</label>
                <input type="number" id="prize" name="prize" className={`${stylesCreate.prize} ${stylesCreate.input}`} />

                <label htmlFor="imageUrl" className={stylesCreate.labelImage}>ImageUrl:</label>
                <input type="text" id="imageUrl" name="imageUrl" className={`${stylesCreate.imageUrl} ${stylesCreate.input}`} />

                <label htmlFor="description" className={stylesCreate.labelDescription}>Description:</label>
                <textarea id="description" name="description" rows="6" cols="50" className={`${stylesCreate.description} ${stylesCreate.textarea}`}></textarea>

                <button className={stylesCreate.create} type="submit">Create</button>
            </form>
        </div>
    );
}

export default Create;