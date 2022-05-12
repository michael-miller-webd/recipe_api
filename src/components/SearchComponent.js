import React from "react";
import { connect } from "react-redux";
import { setSearch } from "../redux/actions";
import { useSelector, useDispatch } from 'react-redux';

class SearchComponent extends React.Component {


    render() {
        // console.log("props: ", this.props);
        const { search, dispatch } = this.props;

        const updateSearch = (e) => {
            dispatch(setSearch(e.target.value));

        }
        return (
            <>
                <input
                    type="text"
                    className="search-bar"
                    value={search}
                    onChange={updateSearch}
                />
                <button type="submit" className="search-button">Search</button>
            </>

        );
    }
}

const mapStateToProps = (state) => {
    console.log("redux state is: ", state);
    return {
        search: state.general.search
    };
};

export default connect(mapStateToProps)(SearchComponent);


// const SearchComponent = () => {

//     const dispatch = useDispatch()
//     const search = useSelector(state => state.general.search)


//     const updateSearch = (e) => {
//         dispatch(setSearch(e.target.value));

//     }

//     return (
//         <>
//             <input
//                 type="text"
//                 className="search-bar"
//                 value={search}
//                 onChange={updateSearch}
//             />
//             <button type="submit" className="search-button">Search</button>
//         </>
//     )

// }
// export default SearchComponent;

