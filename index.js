/*
 * @Author: fencer yangd@mshutech.com
 * @Date: 2022-12-25 17:19:02
 * @LastEditors: fencer yangd@mshutech.com
 * @LastEditTime: 2022-12-25 17:19:55
 * @FilePath: index
 */
/**
 * @providesModule ImageRotate
 * @flow
 */
"use strict";
import { NativeModules } from "react-native";

const RCTImageRotateModule = NativeModules.ImageRotateModule;

export default class ImageRotate {
  /**
   * Rotate the image specified by the URI param. If URI points to a remote
   * image, it will be downloaded automatically. If the image cannot be
   * loaded/downloaded, the failure callback will be called.
   *
   * If the rotate process is successful, the resultant rotated image
   * will be stored in the ImageStore, and the URI returned in the success
   * callback will point to the image in the store. Remember to delete the
   * rotated image from the ImageStore when you are done with it.
   *
   * Angles divisible by 90 are supported, negative angles can be used for
   * counter-clockwise rotation.
   */
  static rotateImage(uri, angle, success, failure) {
    RCTImageRotateModule.rotateImage(uri, angle, success, failure);
  }
}
