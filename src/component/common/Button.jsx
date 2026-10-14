const Button = ({
  children,
  type = "button",
  variant = "primary",
  loading = false,
  disabled = false,
  onClick,
}) => {
  const baseStyle =
    "px-5 py-2.5 rounded-lg font-medium transition duration-200 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };
  return <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`${baseStyle} ${variants[variant]} ${
                disabled || loading
                    ? "opacity-60 cursor-not-allowed"
                    : ""
            }`}
        >
            {loading ? (
                <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Loading...
                </>
            ) : (
                children
            )}
        </button>;
};

export default Button;
