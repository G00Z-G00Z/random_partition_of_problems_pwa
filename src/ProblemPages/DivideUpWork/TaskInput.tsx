import React, { FC, useRef } from 'react'
import useForm from '../../hooks/useForm'
import { AvailableColorNames } from '../../types/AppColors'
import { InputWithUnderline } from '../../components/General/InputWithUnderline'
import { Task } from '../../problem-algorithms/divideUpWork'
import { TaskWeightSelector } from './TaskWeightSelector'

interface Props {
  handleOnKeyDownEvent?: (e: { key: string }) => void;
  onChangeWeight: (v: string) => void;
  onChangeDesc: (v: string) => void;
  weight: number | string;
  desc: string;
  color?: AvailableColorNames;
}

export const TaskInput: FC<Props> = ({
  handleOnKeyDownEvent,
  onChangeWeight,
  onChangeDesc,
  color = "gray",
  desc,
  weight,
}) => {
  return (
    <div className="w-full grid grid-cols-[70%_20%_10%] gap-4 p-4">
      <InputWithUnderline
        onChange={onChangeDesc}
        value={desc}
        onKeyDown={handleOnKeyDownEvent}
        color={color}
      />
      <TaskWeightSelector onChange={onChangeWeight} weight={weight} />
    </div>
  );
};
