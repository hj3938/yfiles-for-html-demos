/****************************************************************************
 ** @license
 ** This demo file is part of yFiles for HTML 2.1.
 ** Copyright (c) 2000-2018 by yWorks GmbH, Vor dem Kreuzberg 28,
 ** 72070 Tuebingen, Germany. All rights reserved.
 **
 ** yFiles demo files exhibit yFiles for HTML functionalities. Any redistribution
 ** of demo files in source code or binary form, with or without
 ** modification, is not permitted.
 **
 ** Owners of a valid software license for a yFiles for HTML version that this
 ** demo is shipped with are allowed to use the demo source code as basis
 ** for their own yFiles for HTML powered applications. Use of such programs is
 ** governed by the rights and conditions as set out in the yFiles for HTML
 ** license agreement.
 **
 ** THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESS OR IMPLIED
 ** WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 ** MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN
 ** NO EVENT SHALL yWorks BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 ** SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 ** TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 ** PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 ** LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 ** NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 ** SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 **
 ***************************************************************************/
'use strict'

define(['yfiles/view-editor'], /** @type {yfiles_namespace} */ /** typeof yfiles */ yfiles => {
  /**
   * An {@link yfiles.input.IReshapeHandleProvider} that doesn't provide any
   * handles.
   * @implements {yfiles.input.IReshapeHandleProvider}
   */
  class RedReshapeHandleProvider extends yfiles.lang.Class(yfiles.input.IReshapeHandleProvider) {
    /**
     * Returns the indicator for no valid position.
     * @param {yfiles.input.IInputModeContext} inputModeContext The context for which the handles are queried
     * @see Specified by {@link yfiles.input.IReshapeHandleProvider#getAvailableHandles}.
     * @return {yfiles.input.HandlePositions}
     */
    getAvailableHandles(inputModeContext) {
      return yfiles.input.HandlePositions.NONE
    }

    /**
     * Returns no handles.
     * @param {yfiles.input.IInputModeContext} inputModeContext The context for which the handles are queried
     * @param {yfiles.input.HandlePositions} position The single position a handle implementation should be returned for
     * @see Specified by {@link yfiles.input.IReshapeHandleProvider#getHandle}.
     * @return {yfiles.input.IHandle}
     */
    getHandle(inputModeContext, position) {
      // Never called since getAvailableHandles returns no valid position.
      return null
    }
  }

  return RedReshapeHandleProvider
})
