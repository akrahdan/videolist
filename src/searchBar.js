import { useState } from "react";

export const SearchBar = ({ onFormChanged}) => {
    const [ term, setTerm] = useState('');

    const onTermSubmit = (event) => {
        event.preventDefault();
        onFormChanged(term)
    }
   
    return (
        <div className="search-bar ui segment">
          <form  className="ui form" onSubmit={onTermSubmit}>
            <div className="field">
              <label>Video Search</label>
              <input
                type="text"
                value = {term}
                onChange={(event) => setTerm(event.target.value)}
                
              />
            </div>
          </form>
        </div>
      );
}