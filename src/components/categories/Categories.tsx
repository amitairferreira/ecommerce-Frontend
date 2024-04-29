import { useEffect, useState } from "react";
import CategoryService, { Category } from "../../services/category.service";
import "./Categories.css"
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await CategoryService.getCategories();
      setCategories(data);
    };
    
    fetchCategories();
  }, []);

  return(
    <>
      {categories.map(category => (
        <div className="col-4">
            <a href={`/shop/${category.id}`}>
              <img id="categoryId" src={category.image_link} alt={category.name} />
              <h5 className="text-center">{category.name}</h5>
            </a>
          </div>
      ))}
    </>
  );
}

export default Categories;