function BestSeller(props) {
    const {title, author, price, type} = props;
    return (
        <section className="best-seller">
            <h2 className="title">이번 주 베스트셀러</h2>
            <img src="https://cdn.pixabay.com/photo/2014/08/16/18/17/book-419589_640.jpg" alt="베스트셀러" />
            <ul>
            <h4>{title}</h4>
                <li>저자: {author}</li>
                <li>판매가: {price}</li>
                <li> 구분: {type}</li>
            </ul>
        </section>
    )
}

export default BestSeller;