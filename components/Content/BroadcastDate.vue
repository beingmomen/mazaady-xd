<template>
  <div class="div-shadow p-2 rounded">
    <div class="bg-[#414141] flex justify-between px-2 py-1 rounded">
      <span class="text-white">تاريخ البث</span>
      <span class="text-white">22-1-2022</span>
    </div>
    <div class="flex gap-1 justify-between mt-1 items-center mb-4">
      <div class="relative text-center bg-[#44215D] p-2 text-white rounded w-1/2 h-full">
        <span class="text-[0.65rem]">القيمة الحالية للمزاد</span>
        <p class="font-bold">$5000</p>
        <div class="absolute left-1/2 -translate-x-1/2 -bottom-4 shadow flex gap-1 bg-white rounded p-1">
          <img src="@/assets/images/per-sm.svg" alt="person">
          <span class="text-[10px] text-darker">أحمد الرائد</span>
        </div>
      </div>
      <div class="text-center bg-[#44215D]/10 p-2 text-[#44215D] rounded w-1/2 h-full">
        <span class="text-[0.65rem]">القيمة الحالية بعد الضريبة</span>
        <p class="font-bold">$5050</p>
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
</style>
