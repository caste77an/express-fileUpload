import "../css/main.css";

function Nav() {
  return (
    <div className="Nav">
      <div className="pc_only">
        <div className="nav_bar pt-5 mw-100">
          <div className="nav container d-flex justify-content-center mw-100 px-0">
            <div className="logo_menu row mx-0">
              <div className="d-flex justify-content-between px-0">
                <div className="menu_empty"></div>
                <div className="d-flex px-0">
                  <p className="darlcha_text my-0">
                    DARL
                    <span>CHA</span>
                  </p>
                </div>
                <div className="mypage d-flex justify-content-between">
                  <img
                    src="data:image/png;base64,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"
                    alt="MY"
                    class=""
                  />
                  <div className="mypage_cart">
                    <img
                      src="data:image/png;base64,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"
                      alt="CART"
                      class=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container d-flex justify-content-center mw-100 px-0">
            <div className="row nav_items d-flex mx-0 py-3">
              <div className="nav_item px-0">
                <p className="text-center">전체 상품</p>
              </div>
              <div className="nav_item px-0">
                <p className="text-center">정기구매</p>
              </div>
              <div className="nav_item_l px-0">
                <p className="text-center">브랜드 스토리</p>
              </div>
              <div className="nav_item_l px-0">
                <p className="text-center">네이버스토어</p>
              </div>
              <div className="nav_item px-0">
                <p className="text-center">인스타그램</p>
              </div>
              <div className="nav_item px-0">
                <p className="text-center">Amazon</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pc_none">
        <div className="nav_bar py-3 mw-100">
          <div className="nav container d-flex justify-content-center mw-100 px-0">
            <div className="logo_menu row mx-0">
              <div className="d-flex justify-content-between align-items-center px-3">
                <div className="nav_menu_bar">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAACpCAYAAABQ1R0vAAAACXBIWXMAACE3AAAhNwEzWJ96AAACWUlEQVR4nO3csanjUBRF0Sfh0CAXoGBK+aVMJ27tu4MpQYEKsMC5BoOK2MFa8Co4G66VeDrPc0DZbB3qREqeSMkTKXkiJU+k5ImUPJGSJ1LyREqeSMkTKXkiJU+k5ImUPJGSJ1LypjHGn+tB0fs2xvg7xniah6iXc0/evK7rw0xULctyn/d9f1uIquM4Ps49ed8Pp+3749RURP3z5xDkOffkiZQ8kZInUvJESp5IyRMpeSIlT6TkiZQ8kZInUvJESp5IyRMpeSIlT6TkiZQ8kZInUvJESp5IyRMpeSIlT6TkiZQ8kZInUvJESp5IyRMpeSIlT6TkiZQ8kZInUvJESp5IyRMpeSIlT6TkiZQ8kZInUvJESp5IyRMpeSIlT6TkiZQ8kZInUvJESt40xvi5HhRttyvQp3mIejn35M3ruj7MRNWyLPd53/e3hag6juPj3JP3/XD6NRNh23Sep4FIc+7JEyl5IiVPpOSJlDyRkidS8kRKnkjJEyl5IiVPpOSJlDyRkidS8kRKnkjJEyl5IiVPpOSJlDyRkidS8kRKnkjJEyl5IiVPpOSJlDyRkidS8kRKnkjJEyl5IiVPpOSJlDyRkidS8kRKnkjJEyl5IiVPpOSJlDyRkidS8kRKnkjJEyl5IiVPpOSJlLxpjPFzPSjablegT/MQ9XLuyZvXdX2YiaplWe7zvu9vC1F1HMfHuSfv++H0aybCtuk8TwOR5tyTJ1LyREqeSMkTKXkiJU+k5ImUPJGSJ1LyREqeSMkTKXkiJU+k5ImUPJGSJ1LyREqeSMkTKW1jjP9ETDONJg4ZcAAAAABJRU5ErkJggg=="
                    alt="MENU"
                  />
                </div>
                <div className="d-flex px-0">
                  <p className="darlcha_text my-0">
                    DARL
                    <span>CHA</span>
                  </p>
                </div>
                <div className="mypage d-flex justify-content-between">
                  <img
                    src="data:image/png;base64,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"
                    alt="MY"
                    class=""
                  />
                  <div className="mypage_cart">
                    <img
                      src="data:image/png;base64,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"
                      alt="CART"
                      class=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
