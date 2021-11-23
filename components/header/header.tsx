// components/header/header.tsx

import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="headerBox">
        <div className="logoTitle">
          <h1>fullstackpathways</h1>
        </div>
        <nav>
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <li>
                <Link href="./">
                  <a>How It Works</a>
                </Link>
              </li>
              <li>
                <Link href="./pathways">
                  <a>Pathways</a>
                </Link>
              </li>
              <li>
                <Link href="./tutors">
                  <a>Tutors</a>
                </Link>
              </li>
              <li>
                <Link href="./signup">
                  <a>Shopping Cart</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
