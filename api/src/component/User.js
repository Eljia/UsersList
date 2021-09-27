import React from "react";
import "./User.scss";
const User = ({ user }) => {
  return (
    <>
      <body>
        <div class="post-card">
          <div class="img-container"></div>
          <span class="share-btn">
            <i class="fa fa-user"></i>
          </span>

          <div class="post-text">
            <div class="post-meta">
              <span class="post-category">
                <i class="fas fa-globe-americas"></i>
                {user.website}
              </span>
              <i class="fa fa-circle-o"></i>
              <span class="post-date">
                <i class="fas fa-envelope"></i>
                {user.email}
              </span>
            </div>
            <h3 class="post-title">
              {user.name} {user.username}
            </h3>
            <span style={{ color: "black", fontSize: "12px", margin: "20px" }}>
              <i class="fas fa-phone"></i>
              {user.phone}
            </span>
            <p class="post-desc">
              <i class="fas fa-map-marker-alt"></i> {user.address.street},
              {user.address.suite},{user.address.city}
            </p>
            <p class="post-desc">
              <span>
                <i class="fas fa-map-pin"></i>
                {user.address.zipcode}
              </span>
            </p>

            <p class="post-desc">
              {" "}
              <i class="fas fa-building"></i> {user.company.name} ,
              {user.company.catchPhrase},{user.company.bs}
            </p>
          </div>
        </div>
      </body>
    </>
  );
};

export default User;
