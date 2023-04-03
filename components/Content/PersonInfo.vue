<template>
  <div class="pb-2 bg-blur -mt-1 pr-4">
    <div class="flex items-center">
      <div class="w-1/4 flex items-center gap-4 pt-2">
        <div class="relative w-12">
          <img src="@/assets/images/per1.svg" alt="person" />
          <div
            class="absolute bottom-0 left-0 w-6 h-6 rounded-full flex justify-center items-center bg-white"
          >
            <img src="@/assets/images/fav3.svg" alt="fav" />
          </div>
        </div>
        <div>
          <h5 class="text-[#44215D]">اسم البائع</h5>
          <h6 class="text-[#44215D]">966598398+</h6>
        </div>
      </div>
      <ul class="flex flex-row-reverse gap-2">
        <li>
          <img src="@/assets/images/star.svg" alt="star" />
        </li>
        <li>
          <img src="@/assets/images/star.svg" alt="star" />
        </li>
        <li>
          <img src="@/assets/images/star.svg" alt="star" />
        </li>
        <li>
          <img src="@/assets/images/star.svg" alt="star" />
        </li>
        <li>
          <img src="@/assets/images/star1.svg" alt="star" />
        </li>
      </ul>
    </div>

    <p class="font-bold mt-2 text-2xl text-[#414141]">
      شراء مجموعة من السيارات من موديلات1990
    </p>
    <span class="text-[#808080]">code 1234</span>

    <div class="flex justify-between">
      <div class="my-2 flex gap-2">
        <div class="bg-main/20 p-3 rounded">
          <span class="text-main"> 10000+ </span>
        </div>
        <div class="bg-main/20 p-3 rounded">
          <span class="text-main"> 10010+ </span>
        </div>
        <div class="bg-main/20 p-3 rounded">
          <span class="text-main"> 10020+ </span>
        </div>
      </div>
      <div class="flex items-center gap-2 ml-4">
        <div class="info-gradient w-[295.79px] h-[38px] rounded"></div>
        <button class="btn w-[88.26px] border-none">تأكيد</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.info-gradient {
  background: rgb(25, 127, 167);
  background: linear-gradient(
    90deg,
    rgba(25, 127, 167, 1) 0%,
    rgba(3, 195, 196, 1) 100%
  );
}

.btn {
  background: rgb(210, 6, 83);
  background: linear-gradient(
    90deg,
    rgba(210, 6, 83, 1) 0%,
    rgba(155, 2, 87, 1) 100%
  );
}
</style>
