const CheckBox: React.FC<{
  isChecked: boolean;
  id: string;
  onChange(): void;
}> = ({ isChecked, id, onChange }) => {
  return (
    <>
      <label htmlFor={id} className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          onChange={onChange}
          checked={isChecked}
          className="hidden"
          id={id}
        />
        <div
          className={`w-18px h-18px flex-shrink-0 border-2 ${
            isChecked ? 'bg-primary' : ''
          }  border-primary rounded-md`}
        >
          {isChecked ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.83158 9L2 6.16842L2.56754 5.6009L4.83158 7.86493L9.69651 3L10.2641 3.56753L4.83158 9Z"
                fill="white"
                stroke="white"
                strokeWidth="0.943635"
              />
            </svg>
          ) : null}
        </div>
      </label>
    </>
  );
};

export default CheckBox;
