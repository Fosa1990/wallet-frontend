import PropTypes from 'prop-types';
import classNames from 'classnames';

const Image = ({
    src, alt, className }) => {
    
    const classes = classNames(
        className,
    );

    return (
        <img
            src={src}
            alt={alt}
            className={classes}
        />
    );
};

Image.propTypes = {
    src: PropTypes.string,
        alt: PropTypes.string,
            className: PropTypes.string,
};

Image.defaultProps = {
    srs: './404-not-found.png',
        alt: 'image 404',
        className: '',
};

export default Image;