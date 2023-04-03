<template>
  <div class="navbar">
    <div class="flex-1">
      <ul class="menu menu-horizontal px-1">
        <li>
          <a class="text-white hover:bg-transparent active:bg-transparent"
            >الرئيسية</a
          >
        </li>
        <li>
          <a
            class="text-white hover:text-darker hover:bg-transparent active:bg-transparent"
            >التصنيفات</a
          >
        </li>
        <li>
          <a
            class="text-white hover:text-darker hover:bg-transparent active:bg-transparent"
            >مشتريات</a
          >
        </li>
        <li>
          <a
            class="text-white hover:text-darker hover:bg-transparent active:bg-transparent"
            >حسابى</a
          >
        </li>
      </ul>
    </div>
    <div class="flex-none">
      <ul class="flex gap-4">
        <li @mousemove="price = false" @mouseleave="price = true">
          <img v-if="price" src="@/assets/images/price.svg" alt="price" />
          <img v-else src="@/assets/images/price2.svg" alt="price" />
        </li>
        <li @mousemove="bell = false" @mouseleave="bell = true">
          <img v-if="bell" src="@/assets/images/bell.svg" alt="bell" />
          <img v-else src="@/assets/images/bell2.svg" alt="bell" />
        </li>
        <li @mousemove="fav = false" @mouseleave="fav = true">
          <img v-if="fav" src="@/assets/images/fav.svg" alt="fav" />
          <img v-else src="@/assets/images/fav2.svg" alt="fav" />
        </li>
        <li>
          <button
            class="flex items-center gap-1 text-white lang px-4 py-0.5 rounded-full"
          >
            عربية
            <img
              class="w-4 h-4 rotate-90"
              src="@/assets/images/arrow.svg"
              alt="down"
            />
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: true,
      bell: true,
      fav: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  background: rgb(160, 2, 87);
  background: linear-gradient(
    90deg,
    rgba(160, 2, 87, 1) 0%,
    rgba(199, 5, 84, 1) 22%,
    rgba(155, 2, 87, 1) 100%
  );
}
li {
  > {
    img {
      width: 24px;
      height: 24px;
      aspect-ratio: 3/2;
      object-fit: contain;
    }
  }
}

.lang {
  background: rgb(253, 188, 1);
  background: linear-gradient(
    90deg,
    rgba(253, 188, 1, 1) 0%,
    rgba(253, 186, 3, 1) 22%,
    rgba(255, 149, 29, 1) 100%
  );
}
</style>
