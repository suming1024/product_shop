import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct(){

    //통합 객체 선언
    const  [formData,setFormData]=useState(
        {name: '', price:'', description:''}
    )

    //페이지 이동 훅
    const navigate=useNavigate()

    //입력값 변경
    const handleChange=(e)=>{
        console.log(e);
        const {name, value} = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    //폼 제출
    const handleSubmit=(e)=>{
        e.preventDefault()

        //입력값 검증
        if(!formData.name.trim() || !formData.price.trim() || !formData.description.trim()
        ){alert('모든필드입력')
        return;}

        if(isNaN(formData.price) || formData.price <= 0){
        alert('숫자입력')
        return;}

        console.log("상품추가",formData);
        alert('상품이 추가되었습니다.')
        
        
            //상품목록페이지로 이동
            navigate('/products')
    }

    return(
        <>
            <div className="add-product">
                <h2>상품등록</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">상품명:</label>
                        <input type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                     <div>
                        <label htmlFor="price">상품가격:</label>
                        <input type="number"
                            id="name"
                            min={1}
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                        />
                    </div>
                     <div>
                        <label htmlFor="description">상품설명:</label>
                        <textarea type="text"
                            id="name"
                            name="description"
                            rows={5}
                            cols={30}
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">등록</button>
                    </div>
                </form>
            </div>
        </>
    )
}