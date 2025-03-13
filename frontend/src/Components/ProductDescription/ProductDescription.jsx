import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { CreateReview, getProductAllReview, getProductDetail } from '../../action/Product'
import { toast } from 'react-toastify'
import ReviewCard from '../ReviewCard/ReviewCard'
// import { createReview } from '../../action/Review' // Assuming you have an action to create a review

const ProductDescription = () => {
    const { loading, product, error } = useSelector((state) => state.getProducuctDetail)
    const { loading:productreviewloading, reviews, error:productreveiw} = useSelector((state) => state.getproductreview)
    const {loading:reviewloading,status}=useSelector((state)=>state.createReview)
    const dispatch = useDispatch()
    const { id } = useParams()

    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')
console.log(rating)
    const handleRatingClick = (rate) => {
        setRating(rate)
    }

    const handleReviewChange = (e) => {
        setComment(e.target.value)
    }

    const handleSubmitReview = (e) => {
        e.preventDefault()

        if (rating === 0 || comment.trim() === '') {
            alert('Please provide both rating and review')
            return
        }

        // Dispatch the action to submit the review
        // dispatch(createReview({ productId: id, rating, review }))
        dispatch(CreateReview({productId:id,rating,comment}))
    }

    useEffect(() => {
        dispatch(getProductDetail(id))
      
    }, [dispatch, id])
    useEffect(() => {
        dispatch(getProductAllReview(id))
      
    }, [dispatch, id,reviews.length])
   
    console.log(reviews)
if(status=='200'){
    return toast("Review Created")
}
    return loading || reviewloading||productreviewloading ? (
        <Loader />
    ) : product ? (
        <div className="bg-gray-100 dark:bg-gray-800 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                        <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                            {product.images.length === 1 ? (
                                <img className="w-full h-full object-cover" src={product.images[0].url} alt="Product Image" />
                            ) : (
                                <>
                                    <div id="default-carousel" className="relative w-full" data-carousel="slide">
                                        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                                            {product.images.map((image, i) => (
                                                <div className="duration-700 ease-in-out" data-carousel-item key={i}>
                                                    <img
                                                        src={image.url}
                                                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                                        alt="..."
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                                            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                                        </div>

                                        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                                </svg>
                                                <span className="sr-only">Previous</span>
                                            </span>
                                        </button>
                                        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                                </svg>
                                                <span className="sr-only">Next</span>
                                            </span>
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="md:flex-1 px-4">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Product Name</h2>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{product.name}</p>
                        <div className="flex mb-4">
                            <div className="mr-4">
                                <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                                <span className="text-gray-600 dark:text-gray-300">{product.price}</span>
                            </div>
                            <div>
                                <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                                <span className="text-gray-600 dark:text-gray-300">
                                    {parseFloat(product.Stock) > 1 ? 'In Stock' : 'Out of Stock'}
                                </span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
                            <div className="flex items-center mt-2">
                                <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                                <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                                <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                                <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
                            <div className="flex items-center mt-2">
                                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
                                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
                                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
                                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
                                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
                            </div>
                        </div>
                        <div>
                            <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{product.description}</p>
                        </div>

                        <div className="p-4 mx-auto bg-white rounded-lg shadow-md max-w-4xl sm:p-6 grid grid-cols-1 lg:grid-cols-6 gap-6 mt-10">
                            <div className="lg:col-span-4 col-span-1">
                                <form onSubmit={handleSubmitReview} className="space-y-4">
                                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Write a review</h2>
                                    <div className="flex justify-start items-center space-x-1 mb-4">
                                        {[5, 4, 3, 2, 1].map((rate) => (
                                            <React.Fragment key={rate}>
                                                <input
                                                    type="radio"
                                                    id={`${rate}-stars`}
                                                    name="rating"
                                                    value={rate}
                                                    className="hidden"
                                                    checked={rating === rate}
                                                    onChange={() => handleRatingClick(rate)}
                                                />
                                                <label
                                                    htmlFor={`${rate}-stars`}
                                                    className={`text-yellow-400 text-2xl cursor-pointer hover:scale-110 ${rating >= rate ? 'text-yellow-500' : ''}`}
                                                >
                                                    ★
                                                </label>
                                            </React.Fragment>
                                        ))}
                                    </div>
                                    <textarea
                                        id="review"
                                        name="review"
                                        rows="4"
                                        required
                                        value={comment}
                                        onChange={handleReviewChange}
                                        className="block w-full p-3 text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Write your review"
                                    />
                                    <div className="text-right py-4">
                                        <button type="submit" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-3">
                                            Create Review
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {reviews && reviews.length>0 ?(
                <>
                <ReviewCard reviews={reviews}/>
                </>
            ):(
                <>No Reviews</>
            )}
        </div>
    ) : (
        <div>No product details</div>
    )
}

export default ProductDescription
