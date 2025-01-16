import { cloneElement } from "react";


export default function Loading({ loading, error, children  , loadingShow}) {
  const typeElement = children.type.render.name;
  const HandelRender = () => {
    if (typeElement === "Button") {
      const cloneButton = cloneElement(
        children,
        { disabled: true },
        "loading.."
      );
      return (
        <>
          {( loading === "pending" || loadingShow === 'pending' ) ? (
            cloneButton
          ) : (
            children
          )}
        </>
      );
    }
    return (
      <>
        {( loading === "pending" || loadingShow === 'pending' )? (
          <p>Loading ...</p>
        )  : (
          children
        )}
      </>
    );
  };
  return HandelRender();
}
