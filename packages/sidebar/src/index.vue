
<template>
  <div class="yys-sidebar" :class="placement">
    <div class="menu-wrapper">
      <slot name="menu"></slot>
    </div>
    <div class="sidebar-content-wrapper" :class="fadeClass">
      <div class="toggle-button" @click="sidebarVisible = !sidebarVisible">
        <div class="triangle" :class="iconClass"></div>
      </div>
      <div class="content-wrapper">
        <div class="content">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts">
</script>

<style lang="scss">
$white: #fff;
.yys-sidebar {
  position: absolute;
  display: flex;
  height: 100%;

  &.left {
    left: 0;

    .sidebar-content-wrapper {
      .toggle-button {
        right: -22px;
      }
    }
  }

  &.right {
    right: 0;

    .sidebar-content-wrapper {
      .toggle-button {
        left: -22px;
        transform: rotate(180deg);
      }
    }
  }

  .sidebar-content-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    background: $white;

    .content-wrapper {
      overflow: hidden;
      transition: width 0.5s;
    }

    .toggle-button {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 50%;
      width: 20px;
      height: 50px;
      cursor: pointer;
      margin-top: -25px;
      line-height: 50px;

      &::before {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: "";
        background: rgba(255, 255, 255, 0.8);
        transform: scaleY(1.5) perspective(5px) rotateY(5deg);
      }

      .triangle {
        width: 0;
        height: 0;
        border-style: solid;
        border-color: transparent #000 transparent transparent;
      }

      .triangle-left {
        border-width: 10px 10px 10px 0;
        border-color: transparent #000 transparent transparent;
      }

      .triangle-right {
        border-width: 10px 0 10px 10px;
        border-color: transparent transparent transparent #000;
      }
    }
  }
}
</style>