function FavoriteFood (props) {
    const {food} = props;
    return (
        <p>내가 제일 좋아하는 <strong>{food}</strong></p>
    )
}

FavoriteFood.defaultProps = {
    food: '김치'
}

export default FavoriteFood;