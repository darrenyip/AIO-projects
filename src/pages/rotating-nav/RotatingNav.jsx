import { useState } from "react";
import { RotatingWpr, StyledContainer, StyledNav } from "./rotating";
function RotatingNav(props) {
  const [toggleNav, setToggleNav] = useState(false);
  const img =
    "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80";
  const handleToggleNav = () => {
    setToggleNav((prev) => !prev);
    console.log("clicked ", toggleNav);
  };
  return (
    <RotatingWpr>
      <div className="relative w-full min-h-screen">
        {/* main container (will be rotated) */}
        <StyledContainer isRotated={toggleNav}>
          <div className="py-6 bg-white">
            <div className="w-[75vw] max-w-[1000px]  my-10 mx-auto">
              <div className="font-bold text-[40px]">Amazing Title</div>
              <div className="text-xs text-[#555] italic mb-3">Darren Yip</div>
              <div className="text-lg mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium quia in ratione dolores cupiditate, maxime aliquid
                impedit dolorem nam dolor omnis atque fuga labore modi veritatis
                porro laborum minus, illo, maiores recusandae cumque ipsa quos.
                Tenetur, consequuntur mollitia labore pariatur sunt quia harum
                aut. Eum maxime dolorem provident natus veritatis molestiae
                cumque quod voluptates ab non, tempore cupiditate? Voluptatem,
                molestias culpa. Corrupti, laudantium iure aliquam rerum sint
                nam quas dolor dignissimos in error placeat quae temporibus
                minus optio eum soluta cupiditate! Cupiditate saepe voluptates
                laudantium. Ducimus consequuntur perferendis consequatur nobis
                exercitationem molestias fugiat commodi omnis. Asperiores quia
                tenetur nemo ipsa.
              </div>
              <h3 className="text-[20px] font-bold mb-3">My Dog</h3>
              <img src={img} alt="cute dog" className="cover mb-3" />
              <div className="text-lg mb-8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
                libero deleniti rerum quo, incidunt vel consequatur culpa ullam.
                Magnam facere earum unde harum. Ea culpa veritatis magnam at
                aliquid. Perferendis totam placeat molestias illo laudantium?
                Minus id minima doloribus dolorum fugit deserunt qui vero
                voluptas, ut quia cum amet temporibus veniam ad ea ab
                perspiciatis, enim accusamus asperiores explicabo provident.
                Voluptates sint, neque fuga cum illum, tempore autem maxime
                similique laborum odio, magnam esse. Aperiam?
              </div>
            </div>
          </div>
          {/* float circle */}
          <div
            className="absolute top-0 left-0 w-[200px] rounded-[50%] h-[200px] bg-[#ff7979] translate-x-[-50%] translate-y-[-50%] cursor-pointer"
            onClick={handleToggleNav}
          ></div>
        </StyledContainer>
        <StyledNav isRotated={toggleNav}>
          <ul>
            <li className="li">Home</li>
            <li className="li">About</li>
            <li className="li">Contact</li>
          </ul>
        </StyledNav>
      </div>
    </RotatingWpr>
  );
}

export default RotatingNav;
