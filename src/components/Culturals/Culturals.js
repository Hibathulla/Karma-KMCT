import classes from "../Ambassadar/Ambassadar.module.css";
import Mobile from "../Ambassadar/Mobile.svg";

import { Fragment } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Spacing from "./Spacing";

const Culturals = () => {
  return (
    <Fragment>
      <Header />
      <div style={{ paddingTop: "6rem" }}></div>

      <Spacing />

      <section className={classes.ambaSection}>
        <div className={classes.ambassadar}>
          <div className={classes.headingBox}>
            <h3 className={classes.heading}>Desafio - Dance Competiton</h3>

            <p className={classes.para}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
              officiis tenetur facere voluptas, quisquam ut totam hic veritatis
              saepe temporibus odit odio laudantium dolorum? Vel?
            </p>

            <p className={classes.para}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid,
              excepturi.
            </p>

            <Link to="/desafio">
              <button className={classes.btn}>View Details !</button>
            </Link>
          </div>

          <div className={classes.imgBox}>
            <img className={classes.img} src={Mobile} alt="Ambassador" />
          </div>
        </div>

        <Spacing />

        {/* Vogue Fiesta */}

        <section className={classes.ambaSection}>
          <div className={classes.ambassadar}>
            <div className={classes.headingBox}>
              <h3 className={classes.heading}>Vogue Fiesta - Fashion Show</h3>
              <p className={classes.para}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                officiis tenetur facere voluptas, quisquam ut totam hic
                veritatis saepe temporibus odit odio laudantium dolorum? Vel?
              </p>

              <p className={classes.para}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquid, excepturi.
              </p>

              <Link to="/voguefiesta">
                <button className={classes.btn}>View Details !</button>
              </Link>
            </div>
            <div className={classes.imgBox}>
              <img className={classes.img} src={Mobile} alt="Ambassador" />
            </div>
          </div>
        </section>

        <Spacing />

        {/* Aghaidh */}
        <section className={classes.ambaSection}>
          <div className={classes.ambassadar}>
            <div className={classes.headingBox}>
              <h3 className={classes.heading}>Aghaidh - Face Painting</h3>
              <p className={classes.para}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                officiis tenetur facere voluptas, quisquam ut totam hic
                veritatis saepe temporibus odit odio laudantium dolorum? Vel?
              </p>

              <p className={classes.para}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquid, excepturi.
              </p>

              <Link to="/aghaidh">
                <button className={classes.btn}>View Details !</button>
              </Link>
            </div>
          </div>
        </section>

        <Spacing />
      </section>
      <Footer />
    </Fragment>
  );
};

export default Culturals;
