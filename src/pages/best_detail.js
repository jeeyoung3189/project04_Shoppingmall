import { useState } from "react";
import { useParams } from "react-router-dom"

function Bestdetail(props){
    let {id} = useParams()
    let findId = props.bestproduct.find(function(x){
        return x.id == id;
    })
    id = Number(id);
    let [count, setCount] = useState(0)
    const dePrice = findId.price
    const dePrice2 = dePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    return(
       <>
        <div className="de_inner">
            <div className="de_info">
                <img src={`${process.env.PUBLIC_URL}/img/best_product0${id+1}.jpg`} />
                <div className="de_txt">
                    <p>{findId.title}</p>
                    <p>판매가 : {dePrice2}원</p>
                    <div className="num">
                        <span>수량 : {count}</span>
                        <button className="plus" onClick={()=>{setCount(count+1)}}>+</button>
                    </div>
                    <button className="buy">구매하기</button>
                    <button className="cart">장바구니</button>
                </div>
            </div>
            <div className="de_page"><img src={`${process.env.PUBLIC_URL}/img/best_detail0${id+1}.jpg`} /></div>
        </div>
       </>
    )
}
export default Bestdetail