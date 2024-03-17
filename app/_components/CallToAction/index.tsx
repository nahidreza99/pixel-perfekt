const CallToAction: React.FC = () => {
  return (
    <form action="" className="flex flex-col md:flex-row gap-[20px]">
      <input
        id="email"
        type="email"
        className="md:w-[420px] w-full h-[54px] rounded-[5px] px-[10px] dark:text-midNightBlue placeholder-midNightBlue placeholder-opacity-60 focus:outline-none"
        placeholder="Enter Your Email"
      />
      <input
        className="px-[25px] py-[15px] rounded-[5px] border-none dark:bg-babyPowder bg-midNightBlue dark:text-midNightBlue text-aliceblue"
        type="submit"
        disabled
      />
    </form>
  )
}

export default CallToAction
