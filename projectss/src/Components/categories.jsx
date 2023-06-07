import '../style/categories.css'
const Categories = () => {

    let categories=[
        {link:"All"},
        {link:"Sports"},
        {link:"Comedy"},
        {link:"Horror"},
        {link:"movies"},
        {link:"fashion"},
        {link:"vlogs"},
        {link:"travel"},
        {link:"food"},
        {link:"music"}
    ]
    return ( 
        <div className="categories">
        <ul>
            {categories.map((data)=>{
                return(
                    <li><a href="">{data.link}</a></li>
                )
            })}
        </ul>
        </div>
     );
}
 
export default Categories;

