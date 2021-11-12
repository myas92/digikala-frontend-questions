function usePageData({ url, fireOnLoad, successCallback, failedCallback }) {
  return { pending: false, request: () => {}, hasError: false, data: {} };
}

export default usePageData;
