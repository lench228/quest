'use client'

import { useDispatch, useSelector } from "react-redux";
import {
  addItem,

  selectItems,
} from "../model";


import {useScroll, motion, useSpring, LayoutGroup, useMotionValue, useMotionValueEvent} from 'motion/react'
import { useRef, useEffect } from "react";

import {QuestItem} from "../../add-picture";
import {Button} from "shared/ui/buttons/button";
import {animate, MotionValue} from "motion";


const QuestItems = () => {
  const items = useSelector(selectItems);
  const dispatch = useDispatch();


  const containerRef = useRef<HTMLDivElement>(null);


  const carouselRef = useRef(null)

  const { scrollYProgress } = useScroll({
    container: carouselRef
  })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

  const onAddButtonClick = () => {
    dispatch(addItem(""));
  };

  useEffect(() => {
    console.log(scrollY)
  });


    return (
      <LayoutGroup>
          <div
              className={"flex flex-col items-center w-full gap-2 mt-2 max-h-[90%] relative"}
              ref={containerRef}

          >
              <motion.div
                  id="scroll-indicator"
                  style={{
                      scaleX,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 10,
                      originX: 0,
                      backgroundColor: "#ff0088",
                      zIndex: 2
                  }}
              />

              <motion.ul
                  className={"list-none  w-full p-12 m-0 flex flex-col  gap-12 items-center overflow-y-scroll scroll-bar"}
                  initial={"hidden"}
                  animate={"visible"}
                  transition={{duration: 0.5}}
                  ref={carouselRef}

              >
                  {items ?
                      items.map((item, index) => (

                          <QuestItem
                              key={index}
                              imageUrl={item.imageUrl}
                              order={index + 1}
                              total={items.length}
                          />

                      )) :
                      <QuestItem imageUrl={""} order={1} total={1}/>
                  }
              </motion.ul>

              <Button onClick={onAddButtonClick} variant={'primary'} size={'lg'}>+</Button>
          </div>
      </LayoutGroup>

  );
};


export {QuestItems};
