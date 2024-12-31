import { useEffect, useState } from "react";
import FeaturedBookCard from "./FeaturedBookCard";

const FeaturedBook = () => {

    const [featuredBook, setFeaturedBook] = useState([]);
         
        useEffect(() => {
            fetch('FeaturedBooks.json')
            .then (res => res.json())
            .then(data => setFeaturedBook(data));
        } ,[])


    return (
        <div className="mt-10">
            <div className="text-center">
                <h1 className="4xl font-semibold" > Featured Book</h1>
                <p > Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            </div>
            <div className="mt-10 grid grid-cols-1 ml-16  md:grid-cols-2 lg:grid-cols-3 lg:ml-36  gap-5 ">
                {
                   featuredBook.map(featuredBook =>
                    <FeaturedBookCard
                    key ={featuredBook._id}
                    featuredBook = {featuredBook}
                    >

                    </FeaturedBookCard>
                   )
                }
            </div>
        </div>
    );
};

export default FeaturedBook;