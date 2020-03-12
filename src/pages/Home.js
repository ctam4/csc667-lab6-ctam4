import React from 'react';
import { connect } from 'react-redux'; // step 1

const Home = ({ isLoggedIn, user }) => { // step 4 pass props in to component
  return (
    <div>
      <h2>Home</h2>
      {isLoggedIn && (
        <div>
          <p>
            {`Welcome ${user}!`}
          </p>
        </div>
      )}
    </div>
  );
};

// Step 2 create mapping function
const mapStateToProps = state => ({
  isLoggedIn: state.userReducer.isLoggedIn,
  user: state.userReducer.user,
});

// step 3 connect mapping function to component
export default connect(mapStateToProps)(Home);
