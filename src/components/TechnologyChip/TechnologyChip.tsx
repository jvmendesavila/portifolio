interface IProps {
  technology: string
}

export const TechnologyChip = (props: IProps) => {
  return (
    <span
      key={props.technology}
      className="px-2 py-1 text-white text-xs text-bold bg-indigo-500 rounded-full"
    >
      {props.technology}
    </span>
  );
};
