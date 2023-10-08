import "scss/_adaptlayout.scss";

export default function MediaLayout({ src, className }) {
  return (
    <div id="responsive-gallery" className={`gallery ${className}`}>
      <div style={{ borderRadius: 50 }} className="root">
        <div className="inner_container">
          <div className="inner_container ic_property">
            <div className="img_container">
              <img src={src} className="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
