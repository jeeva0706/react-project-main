
import "./BlogList.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

function BlogList() {
    return (
        <div>
            <div className="image-book-bloglist" aria-label="Background image of books">
                <h1 className="h1-bloglist">
                    BLOG
                </h1>
                <h6 className="h6-home-to-bloglist">
                    HOME
                    <span>
                        <FontAwesomeIcon className="iconright-arrow" icon={faAnglesRight} />
                    </span>
                    BLOG
                </h6>
            </div>
        </div>
    )
}

export default BlogList;
