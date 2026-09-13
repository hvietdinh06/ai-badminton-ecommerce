import { useState, useEffect, useRef } from "react";
import "./navbar.css";

function Navbar() {
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
//tạo ref trỏ tới toàn bộ thanh navbar
const navbarRef = useRef(null);
//lắng nghe sự kiện click chuột ra ngoài
useEffect(() => {
  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsAccountOpen(false);
      setIsCartOpen(false);
      setIsProductOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  const handleAccountToggle = () => {
    setIsAccountOpen((prev) => !prev);
    setIsCartOpen(false);
    setIsProductOpen(false);
  };

  const handleCartToggle = () => {
    setIsCartOpen((prev) => !prev);
    setIsAccountOpen(false);
    setIsProductOpen(false);
  };

  const handleProductToggle = () => {
    setIsProductOpen((prev) => !prev);
    setIsAccountOpen(false);
    setIsCartOpen(false);
  };

  return (
    <header className="navbar" ref ={navbarRef}>
      {/* ================= TOP HEADER ================= */}
      <div className="navbar-top">
        {/* Logo */}
        <a href="/" className="navbar-logo">
          <div className="logo-icon">🏸</div>

          <div className="logo-text">
            <span>HVBadminton</span>
            <small>Play Better. Live Healthier.</small>
          </div>
        </a>

        {/* Search */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm, thương hiệu, ..."
          />

          <button
            type="button"
            className="search-button"
            aria-label="Tìm kiếm"
          >
            🔍
          </button>
        </div>

        {/* Hotline */}
        <div className="hotline">
          <div className="hotline-icon">☎</div>

          <div className="hotline-info">
            <span>Hotline</span>
            <strong>0329 596 879</strong>
          </div>
        </div>

        {/* Account */}
        <div
          className="navbar-action"
          onMouseEnter={() => setIsAccountOpen(true)}
          onMouseLeave={() => setIsAccountOpen(false)}
        >
          <button
            type="button"
            className="action-button"
            onClick={handleAccountToggle}
          >
            <span className="action-icon">♙</span>

            <span className="action-text">Tài khoản</span>

            <span className="arrow">
              {isAccountOpen ? "⌃" : "⌄"}
            </span>
          </button>

          {isAccountOpen && (
            <div className="dropdown account-dropdown">
              <a href="/login">Đăng nhập</a>

              <a href="/register">Đăng ký</a>

              <hr />

              <a href="/account">Thông tin tài khoản</a>

              <a href="/orders">Đơn hàng của tôi</a>

              <a href="/change-password">Đổi mật khẩu</a>

              <hr />

              <button type="button">Đăng xuất</button>
            </div>
          )}
        </div>

        {/* Cart */}
        <div
          className="navbar-action"
          onMouseEnter={() => setIsCartOpen(true)}
          onMouseLeave={() => setIsCartOpen(false)}
        >
          <button
            type="button"
            className="action-button cart-button"
            onClick={handleCartToggle}
          >
            <span className="action-icon">🛒</span>

            <span className="action-text">Giỏ hàng</span>

            <span className="cart-count">2</span>

            <span className="arrow">
              {isCartOpen ? "⌃" : "⌄"}
            </span>
          </button>

          {isCartOpen && (
            <div className="dropdown cart-dropdown">
              <h4>Sản phẩm trong giỏ (2)</h4>

              {/* Cart Item 1 */}
              <div className="cart-item">
                <div className="cart-image">🏸</div>

                <div className="cart-info">
                  <strong>Yonex Astrox 100ZZ</strong>

                  <span>4.290.000đ</span>

                  <div className="quantity">
                    <button type="button">−</button>
                    <span>1</span>
                    <button type="button">+</button>
                  </div>
                </div>

                <button
                  type="button"
                  className="remove-cart-item"
                >
                  🗑
                </button>
              </div>

              {/* Cart Item 2 */}
              <div className="cart-item">
                <div className="cart-image">👟</div>

                <div className="cart-info">
                  <strong>Yonex 6523</strong>

                  <span>2.650.000đ</span>

                  <div className="quantity">
                    <button type="button">−</button>
                    <span>1</span>
                    <button type="button">+</button>
                  </div>
                </div>

                <button
                  type="button"
                  className="remove-cart-item"
                >
                  🗑
                </button>
              </div>

              {/* Cart Total */}
              <div className="cart-total">
                <span>Tổng tiền</span>

                <strong>6.940.000đ</strong>
              </div>

              <a href="/cart" className="view-cart-button">
                Xem giỏ hàng
              </a>
            </div>
          )}
        </div>
      </div>

      {/* ================= NAVIGATION ================= */}
      <div className = "navbar-bottom">
      <nav className="navbar-menu">
        <a href="/" className="nav-link">
          Trang chủ
        </a>

        <a href="/news" className="nav-link">
          Tin tức
        </a>

        {/* Product Dropdown */}
        <div
          className="nav-product"
          onMouseEnter={() => setIsProductOpen(true)}
          onMouseLeave={() => setIsProductOpen(false)}
        >
          <button
            type="button"
            className="nav-link product-button"
            onClick={handleProductToggle}
          >
            <span>Sản phẩm</span>

            <span>
              {isProductOpen ? "⌃" : "⌄"}
            </span>
          </button>

          {isProductOpen && (
            <div className="product-dropdown">
              <a href="/products/rackets">
                <span>🏸 Vợt cầu lông</span>
                <span>›</span>
              </a>

              <a href="/products/shoes">
                <span>👟 Giày cầu lông</span>
                <span>›</span>
              </a>

              <a href="/products/bags">
                <span>🎒 Túi vợt</span>
                <span>›</span>
              </a>

              <a href="/products/accessories">
                <span>🔧 Phụ kiện</span>
                <span>›</span>
              </a>

              <a href="/brands">
                <span>☆ Thương hiệu</span>
                <span>›</span>
              </a>
            </div>
          )}
        </div>

        <a href="/careers" className="nav-link">
          Tuyển dụng
        </a>

        <a href="/about" className="nav-link">
          Giới thiệu
        </a>

        <a href="/contact" className="nav-link">
          Liên hệ
        </a>
      </nav>
      </div>
    </header>
  );
}

export default Navbar;