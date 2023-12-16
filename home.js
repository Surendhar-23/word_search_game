export function homepage() {
  root.innerHTML = `<div class="home">
  <h1 class="heading-primary">Word puzzle</h1>
  <a href="#" class="btn btn-play btn-animate" id='play'>Start</a>
  <button class="home--control--menu">
    <i class="bx bxs-cog control--menu--icon"></i>
  </button>
</div>
<!-- options -->
<div class="popup--container menu-container">
  <div class="menu">
    <h2 class="heading-secondary">Options</h2>

    <div class="menu--options">
      <div
        class="menu--music--option"
        onclick="console.log(document.querySelector('.menu--music--option').classList.toggle('muted'))"
      >
        <span>Music</span>
        <i class="bx bxs-volume-full music--icon"></i>
        <!-- <i class='bx bxs-volume' ></i> -->
      </div>

      <div class="menu--volume--option">
        <span class="menu--label">Volume</span>
        <input type="range" name="" id="" class="volume--control" />
      </div>
    </div>
    <div class="menu--close"><i class="bx bx-x close--icon"></i></div>
  </div>
</div>`;
}
