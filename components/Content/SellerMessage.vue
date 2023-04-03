<template>
  <div class="div-shadow rounded mt-4 p-2">
    <h4 class="font-bold text-[#414141]">ارسال رسالة الى البائع</h4>
    <span class="text-[#414141] text-xs"
      >يمكنك في وقت البث المباشر ارسال رسالة الى البائع للاستفسار
    </span>
    <div class="mt-4 flex gap-4">
      <input
        type="text"
        placeholder="اكتب سؤالك"
        class="input w-11/12 bg-[#F3F3F3] rounded-full focus:border-0"
      />
      <div
        class="div w-[44px] h-[44px] flex justify-center items-center rounded-full cursor-pointer"
      >
        <img src="@/assets/images/send.svg" alt="send" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.div-shadow {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}

.div {
  background: rgb(210, 6, 83);
  background: linear-gradient(
    90deg,
    rgba(210, 6, 83, 1) 0%,
    rgba(155, 2, 87, 1) 100%
  );
}
</style>
